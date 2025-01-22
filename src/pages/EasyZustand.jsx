import useKeenStore from "../store/keenStore"


function EasyZustand() {
    //javascript

    //step 2 Use store
    const alale = useKeenStore((state)=>state.firstName)
    console.log(alale)
    const address = useKeenStore((state)=>state.address)
    console.log(address.street)
  return (
    <div>EasyZustand</div>
  )
}

export default EasyZustand