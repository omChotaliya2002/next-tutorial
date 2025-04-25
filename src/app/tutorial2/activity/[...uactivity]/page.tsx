"use client";

interface props {
    params  : {
        uactivity : string[];
    };
}



export default function UserActivity ({params} : props) {

    // console.log("params are : ",params);

    const activity = params.uactivity;

    return (

    <>

    <div className="mt-[20px]">

        <table className="text-center" style={{border:"1px solid white"}}>

            <tr>
                <th className="w-[120px] h-[35px]" style={{border:"1px solid white"}}><b> User name </b></th>
                <th className="w-[120px] h-[35px]" style={{border:"1px solid white"}}><b> Activity </b></th>
            </tr>

            {/* {
                activity.map((_,index)=> )
            } */}

            {/* <tr>
                <td style={{border:"1px solid white"}}> {activity[0]} </td>
                <td style={{border:"1px solid white"}}> {activity[1]} </td>
            </tr> */}

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