import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";


function FacultyDetails(){
    const [Faculty , setFaculty] = useState({});
    let param = useParams();
    useEffect( () => {
        fetch("https://62dba3fee56f6d82a77507de.mockapi.io/FacultyDetails/" + param.id)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            setFaculty(res);
        })
    },[]);

    return(
        <>
          <div className="container">
              <div className="row">
                  <div className="col" id="card1">
                        <div className="card" id="card2">
                            <center><img src={Faculty.FacultyImage} class="image1" alt="..."/></center>
                            <div class="card-body">
                                <center>
                                        <h4 class="name">{Faculty.FacultyName}</h4>
                                        <h6 id="designation">{Faculty.FacultyDesignation}</h6>
                                    <hr/><h6 id="edu">{Faculty.FacultyHighestEducation}</h6><hr/>
                                    <div id="col1">
                                        <div className="row">
                                            <div className="col" id="year3">Experience</div>
                                            <div className="col" id="year3">Working Since</div>
                                        </div>
                                        <div className="row">
                                            <div className="col" id="year1">{Faculty.FacultyExperienceInYears}</div>
                                            <div className="col" id="year2">{Faculty.FacultyWorkingSince}</div>
                                        </div>
                                    </div>
                                </center>
                                <hr/>
                                <div className="row" id="personaldetail">
                                     <span id="icon"><i className="fa fa-phone"></i></span>
                                     <span id="icon2">(M)&nbsp; : &nbsp;&nbsp; {Faculty.FacultyMobileNumber}</span>
                                     <span id="icon2"> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; (O)&nbsp; : &nbsp;&nbsp; {Faculty.FacultyMobileNumber}</span>
                                </div>
                                <div className="row" id="personaldetail">
                                     <span id="icon"><i className="fa fa-envelope"></i></span>
                                     <span id="icon2">{Faculty.FacultyEmailAddress}</span>
                                </div>
                                <div className="row" id="personaldetail">
                                     <span id="icon"><i className="fa fa-map-marker"></i></span>
                                     <span id="icon2">{Faculty.FacultySeating}</span>
                            </div>
                            </div>
                        </div>
                  </div>

                  <div className="col" id="facultyprofile">
                    <h3 id="profilefaculty">Profile</h3>
                    <hr/>
                    <p id="description">{Faculty.FacultyProfileDescription}</p>
                   <div id="subject">
                        <div className="row">
                             <div className="col" id="specialist">Area of Specialization</div>
                             <div className="col" id="description">{Faculty.FacultyAreaSpecialization}</div>
                        </div>

                        <div className="row">
                             <div className="col" id="specialist">Subjects Taught</div>
                             <div className="col" id="description">{Faculty.FacultySubjectTaught}</div>
                         </div>
                   </div>

                  </div>
              </div>
          </div>
        </>
    );
}

export default FacultyDetails;