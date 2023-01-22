import { clothdata } from "../clothsdata";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useProvider } from "../clothcontext";
const Cloths = () => {
  const {
    sizeArr,
    size,
    nextSize,
    prevSize,
    updateSelected,
    selected,
    quant,
    prevQuant,
    nextQuant,
    updateCart,
  } = useProvider();
  return (
    <div className="md:mt-40 max-w-[1000px] mx-auto ">
      <div
        className={`grid grid-cols-1 ll:grid-cols-2 ml:grid-cols-3  md:grid-cols-4
        mx-auto  gap-5  px-3 pb-24`}
      >
        {clothdata.map(({ id, image, name, price, num }, index) => {
          return (
            <div
              className={`bg-white rounded mt-10 px-2 `}
              key={index}
              onClick={() => updateSelected(index)}
            >
              <img src={image} alt={`pic${id}`} className={`bg-plain `} />
              <div>
                <div className={`flex justify-between mt-5`}>
                  <h5 className={`text-deets font-medium text-xl leading-6`}>
                    {name}
                  </h5>
                  <p
                    className={`text-deets font-medium ${
                      index === selected ? "hidden" : "block"
                    }  text-xl leading-6`}
                  >
                    {price}
                  </p>
                </div>
                <div
                  className={`my-3 ${
                    index === selected ? "block" : "invisible"
                  }`}
                >
                  <div className={`flex justify-between`}>
                    <div className={`flex items-center gap-1`}>
                      <h4 className="text-xs text-deets font-medium ">Size</h4>
                      <div
                        className={`text-xs text-deets  font-medium flex items-center justify-center`}
                      >
                        <BsChevronLeft onClick={prevSize} />

                        <p className={`uppercase text-xs`}>
                          {sizeArr[index === selected ? size : 0]}
                        </p>
                        <BsChevronRight onClick={nextSize} />
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <h4 className="text-xs text-deets font-medium">
                        Quality
                      </h4>
                      <div
                        className={`text-xs text-deets font-medium flex items-center justify-center`}
                      >
                        <BsChevronLeft onClick={() => prevQuant(index)} />
                        <p className="bg-plain rounded-sm">{quant}</p>
                        {/* <p className='bg-plain rounded-sm'>{num + 1}</p> */}
                        <BsChevronRight onClick={() => nextQuant(index)} />
                      </div>
                    </div>
                  </div>
                  <div className={`flex justify-between items-center pt-3`}>
                    <h5 className={`text-smheader text-base font-bold`}>
                      {price}
                    </h5>
                    <button
                      className="text-smheader font-medium text-xs p-1 border border-logo"
                      onClick={() => {
                        return updateCart(index);
                      }}
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

export default Cloths;

// grid-cols-1 xl:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
