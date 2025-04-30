
interface Props {
    params  : {
        uactivity : string[];
    };
}



export default function Page ({params} : Props) {

    // console.log("params are : ",params);

    const activity = params.uactivity;

    return (

    <>

<div className="mt-[20px]">

    <table className="text-center" style={{border:"1px solid white"}}>

            <thead>
                    <tr>
                        <th className="w-[120px] h-[35px]" style={{border:"1px solid white"}}><b> User name </b></th>
                        <th className="w-[120px] h-[35px]" style={{border:"1px solid white"}}><b> Activity </b></th>
                    </tr>
            </thead>


            {/* {
                activity.map((_,index)=> )
            } */}

        <tbody>
                <tr>
                    <td style={{border:"1px solid white"}}> {activity[0]} </td>
                    <td style={{border:"1px solid white"}}> {activity[1]} </td>
                </tr>
        </tbody>
  </table>

            
            



            {/* Get all the segments dynamically :  */}

            {/* {
                activity.map((act)=> (
                    
                    <div> 
                        <h1 className="mt-[20px]"> {act} </h1>
                    </div>
                ))
            } */}


        </div>
     </>
    )

}