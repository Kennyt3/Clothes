import { useState, useRef } from "react";
import { clothdata as Clothes } from "../clothsdata";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useCart } from "../context/CartContext";

const ClothesTwo = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);
  const prevSelected = useRef();
  const [selected, setSelected] = useState();

  // context
  const { addToCart } = useCart();

  const reset = (index) => {
    // this check is true when you move to another item in the array
    if (prevSelected.current !== index) {
      setQuantity(1);
      setSize(0);
    }
    prevSelected.current = index;
  };

  const changeSize = (action, index) => {
    reset(index);
    // this check is to increase and decrease the size
    if (action === "reduce" && size > 0) {
      setSize((prev) => prev - 1);
    }
    if (action === "increase" && size <= 7) {
      setSize((prev) => prev + 1);
    }
  };

  const changeQuantity = (action, index) => {
    reset(index);
    // this check is to increase and decrease the size
    if (action === "reduce" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="md:mt-40 max-w-[1000px] mx-auto ">
      <div
        className={`grid grid-cols-1 ll:grid-cols-2 ml:grid-cols-3  md:grid-cols-4
        mx-auto  gap-5  px-3 pb-24`}
      >
        {Clothes.map((cloth, index) => {
          const { id, image, name, price, sizeArr: sizes } = cloth;
          return (
            <div
              className={`bg-white rounded mt-10 px-2 `}
              key={index}
              onClick={() => setSelected(index)}
            >
              <img src={image} alt={`pic${id}`} className={`bg-plain `} />
              <div>
                <div className={`flex justify-between mt-5`}>
                  <h5 className={`text-deets font-medium text-xl leading-6`}>
                    {name}
                  </h5>
                  <p className={`text-deets font-medium   text-xl leading-6`}>
                    {price}
                  </p>
                </div>
                <div className={`my-3`}>
                  <div className={`flex justify-between`}>
                    <div className={`flex items-center gap-1`}>
                      <h4 className="text-xs text-deets font-medium ">Size</h4>
                      <div
                        className={`text-xs text-deets  font-medium flex items-center justify-center`}
                      >
                        <BsChevronLeft
                          onClick={() => {
                            changeSize("reduce", index);
                          }}
                        />
                        <p className={`uppercase text-xs`}>
                          {selected === index ? sizes[size] : sizes[0]}
                        </p>
                        <BsChevronRight
                          onClick={() => {
                            changeSize("increase", index);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <h4 className="text-xs text-deets font-medium">
                        Quantity
                      </h4>
                      <div
                        className={`text-xs text-deets font-medium flex items-center justify-center`}
                      >
                        <BsChevronLeft
                          onClick={() => changeQuantity("reduce", index)}
                        />
                        <p className="bg-plain rounded-sm">
                          {selected === index ? quantity : 1}
                        </p>
                        <BsChevronRight
                          onClick={() => changeQuantity("increase", index)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`flex justify-between items-center pt-3`}>
                    <h5 className={`text-smheader text-base font-bold`}>
                      {price}
                    </h5>
                    <button
                      onClick={() => {
                        addToCart({
                          id,
                          name,
                          price,
                          quantity,
                          size: sizes[size],
                        });
                      }}
                      className="text-smheader font-medium text-xs p-1 border border-logo"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClothesTwo;
