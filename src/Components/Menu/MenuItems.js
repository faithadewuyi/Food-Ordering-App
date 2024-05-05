export default function MenuItems(){
  return(
    <div>
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl shadow-black/50 transition-all">
        <div className="text-center" >
        <img src="/pizza1.png" alt="pizza" 
        className="max-h-auto max-w-14 block mx-auto"
        />
        </div>
        
        <h4 className="font-semibold my-3">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">Indulge in the classic favorite, Pepperoni Pizza, featuring a crispy crust, and a generous topping of spicy pepperoni slices.
        </p>
        <button className="bg-primary text-white rounded-full px-8 py-2 mt-4"> Add to cart #3,000</button>
 
      </div>
    </div>
  )
}