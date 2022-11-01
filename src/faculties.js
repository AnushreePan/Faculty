import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Faculties(){
    const [Faculties , setFaculties] = useState([]);
    useEffect( () => {
        fetch("https://62dba3fee56f6d82a77507de.mockapi.io/FacultyDetails")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            setFaculties(res);
        })
    },[]);

    const newFaculty = Faculties.map((fac) => {
        return(
            <>
                <div class="card col-md-3" id="card">
                <Link to={"../facultydetails/" + fac.id} >  
                    <center><img src={fac.FacultyImage} class="image" alt="..."/></center>
                    <div class="card-body">
                        <h4 class="name">{fac.FacultyName}</h4>
                        <h6 id="designation">{fac.FacultyDesignation}</h6>
                        <hr/><h6 id="edu">{fac.FacultyHighestEducation}</h6><hr/>
                        <div id="col1">
                            <div className="row">
                                <div className="col" id="years">Experience</div>
                                <div className="col" id="years">Working Since</div>
                            </div>
                            <div className="row">
                                <div className="col" id="year1">{fac.FacultyExperienceInYears}</div>
                                <div className="col" id="year2">{fac.FacultyWorkingSince}</div>
                            </div>
                        </div>
            
                        <div id="profile">
                           <Link to={"../facultydetails/" + fac.id} className="profile" > View Profile → </Link>
                        </div>
                    </div>
                 </Link>
                 </div>
            </>
        )
    })

    return(
        <>
        <center>
            <div className="container">
                <div className="row">
                    {newFaculty}
                </div>
            </div>
        </center>
        </>
    );
}

export default Faculties;
 