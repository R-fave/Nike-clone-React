import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex felx-1 flex-col w-full max-sm:w-full">
      <img 
      src={imgURL}
      alt={name}
      className="w-[280px] h-[280px] rounded-3xl hover:scale-105 transition duration-300 ease-in-out transform" />


      <div className="mt-8 flex justify-start gap-2.5">
        <img 
        src={star}
        alt="rating"
        width={24}
        height={24}
        />
        <p className=" font-montserrat text-l leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-l leading-normal">{price}</p>
    </div>


  )
}

export default PopularProductCard
