import React, { useState } from "react";
import "./multiple.css";
export default function Multiple() {
    const defaultState = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        program: "Health Infomatics", // because in html this displays by default
        address: "",
        qualification: ""
    }

    const [formData, setFormData] = useState({
        ...defaultState
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newValue = { ...formData, [name]: value };
        setFormData(newValue);

        console.log(newValue);
    };

    const resetForm = (event) => {
        // reset back to default
         setFormData({ ...defaultState });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`
             Name: ${formData.firstName} ${formData.lastName} 
             Email: ${formData.email} 
             Mobile Number: ${formData.phoneNumber}
             Program: ${formData.program}
             Address: ${formData.address}
             Qualification: ${formData.qualification}
             `
        );
    };
    return (
        <form onSubmit={handleSubmit} className="multiple">
            <div className="multiple__inputdiv">
                <label className="bold" htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <span className="bold">(Minimum 5 char)</span>
            </div>

            <div className="multiple__inputdiv">
                <label className="bold" htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>

            <div className="multiple__inputdiv">
                <label className="bold" htmlFor="Email">Email ID</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="multiple__inputdiv">
                <label className="bold" htmlFor="Email">Mobile Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </div>

            <div className="multiple__inputdiv">
                <label className="bold" htmlFor="program">Program</label>
                <select id="program" name="program" value={formData.program} onChange={handleChange}>
                    <option>Health Infomatics</option>
                    <option>Artificial Intelligence</option>
                    <option>Software Engineer</option> 
                    <option>Game Programming</option>
                    <option>Software Technician</option>
                </select> 
            </div>

            <div className="multiple__inputdiv">
                <label className="bold" htmlFor="address">Address</label>
                <textarea className="multiple__textarea" id="address" name="address" rows="10" value={formData.address} onChange={handleChange}>
                </textarea>
            </div>

            <div className="multiple__inputdiv">
                <div>
                    <span className="bold">Qualification</span>
                </div>
                <div>
                    <div className="multiple__radiodiv">
                        <input type="radio" id="qualification1" name="qualification" value="highSchool(10th)"
                            checked={formData.qualification == "highSchool(10th)"}
                            onChange={handleChange}
                        /> 
                        <label className="bold" htmlFor="qualification1">High School(10th)</label>
                    </div>
                    <div className="multiple__radiodiv">
                        <input type="radio" id="qualification2" name="qualification" value="higherSchool(12th)" 
                            checked={formData.qualification == "higherSchool(12th)"}
                            onChange={handleChange}
                        />
                        <label className="bold" htmlFor="qualification2">Higher School(12th)</label>
                    </div>
                    <div className="multiple__radiodiv">
                        <input type="radio" id="qualification3" name="qualification" value="graduation(Bachelors)" 
                            checked={formData.qualification == "graduation(Bachelors)"}
                            onChange={handleChange}
                        />
                        <label className="bold" htmlFor="qualification3">Graduation(Bachelors)</label>
                    </div>
                    <div className="multiple__radiodiv">
                        <input type="radio" id="qualification4" name="qualification" value="post-graduation(Masters)" 
                            checked={formData.qualification == "post-graduation(Masters)"}
                            onChange={handleChange}
                        />
                        <label className="bold" htmlFor="qualification4">Post Graduateion(Masters)</label>
                    </div>
                    <div className="multiple__radiodiv">
                        <input type="radio" id="qualification5" name="qualification" value="Other" 
                            checked={formData.qualification == "Other"}
                            onChange={handleChange}
                        />
                        <label className="bold" htmlFor="qualification5">Other</label>
                    </div> 
                </div>
            </div>

            <button className="multiple__button" type="submit">
                Submit
            </button>
            <button className="multiple__button" type="reset" onClick={resetForm}>
                Reset
            </button>
        </form>
    );
}
