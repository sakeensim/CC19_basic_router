import useKeenStore from "../store/keenStore"


function EasyZustand() {
    //javascript

    //step 2 Use store
    const alale = useKeenStore((state)=>state.firstName)
    // console.log(alale)
    const address = useKeenStore((state)=>state.address)
    // console.log(address.street)

    const profile = useKeenStore((state)=> state.profile)
    console.log(profile)

    const product = useKeenStore((state)=>state.products)
    console.log(product)

    const number = useKeenStore((state)=> state.number)

    const actionIncrease = useKeenStore((state)=> state.actionIncrease)
    const actionDecrease = useKeenStore((state)=> state.actionDecrease)
    const actionDecrease1 = useKeenStore((state)=> state.actionDecrease1)
    const actionTimes = useKeenStore((state)=>state.actionTimes)
    const actionDivide = useKeenStore((state)=> state.actionDivide)
    const actionDivide1 = useKeenStore((state)=> state.actionDivide)

    // const hdlClick = () =>{
    //     actionTimes();
    // }

  return (
    <>
    <div>EasyZustand</div>
    <p>{profile[0]}</p>
    <p>{address.zipcode}</p>
    <p>{product[1].title} price : {product[1].price}</p>
    <p className="text-8xl">{number}</p>
    <button 
    onClick={actionIncrease}
    className="bg-green-400 rounded-md p-1"
    >Increase</button>
    <button 
    onClick={actionDecrease}
    className="bg-green-400 rounded-md p-1 ml-2"
    >Decrease</button>
    <button 
    onClick={actionDecrease1}
    className="bg-green-400 rounded-md p-1 ml-2"
    >Decrease2</button>
    <button 
    onClick={actionTimes}
    className="bg-green-400 rounded-md p-1 ml-2"
    >Times</button>
    <button 
    onClick={actionDivide}
    className="bg-green-400 rounded-md p-1 ml-2"
    >Divide</button>
    <button 
    onClick= {() => actionDivide1("8")}
    className="bg-green-400 rounded-md p-1 ml-2"
    >Divide1</button>
    </>
  )
}

export default EasyZustand