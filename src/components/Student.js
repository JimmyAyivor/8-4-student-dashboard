import React, { useState } from 'react';
import xicon from '../assets/x-icon.jpeg';
import tickicon from '../assets/tick-icon.webp';
import Notes from './Notes';

function Student(props) {
    const [showMore, setShowMore] = useState(false);

    const Data = props.studentsData;


    const students = Data.map(({ id,
        names,
        username,
        dob,
        profilePhoto,
        codewars,
        certifications,
        cohort }) => {
        const style = () => {

            if (goalTotal >= 100) {
                return { color: "green" };
            } else {
                if (goalTotal >= 50 && goalTotal < 100) {
                    return { color: "gold" };
                } else {
                    return { color: "red" };
                }
            }
        };

        const handleCheck = (e) => {
            console.log("Hello");
        };

        const studentStatus = () => {
            if (certifications.resume &&
                certifications.linkedin &&
                certifications.mockInterview &&
                certifications.github &&
                codewars.current.total > 600
            ) {
                return `On Track to Graduate`;
            }
            return "";
        };
        const xIcon = (<img className='xIcon' src={xicon} alt="x-icon"></img>)
        const tickIcon = (<img className='tickIcon' src={tickicon} alt="x-icon"></img>)

        const goalTotal = Math.floor(codewars.current.total / codewars.goal.total * 100);



        const extraContent = <>
            <div className='ShowMore'>
                <div className='MoreBox'>
                    <h3>codewars:</h3>
                    <p>Current Total: {codewars.current.total}</p>
                    <p>Last Week: {codewars.current.lastWeek}</p>
                    <p>Goal: {codewars.goal.total}</p>
                    <p>Percent of Goal Achieved: <span style={style()} >{goalTotal}%</span></p>
                </div >
                <div className='MoreBox'>
                    <h3>score</h3>
                    <p>Assignements: {cohort.scores.assignments * 100}%</p>
                    <p>Projects: {cohort.scores.projects * 100}%</p>
                    <p>Assesments: {cohort.scores.assessments * 100}%</p>
                </div>
                <div className='MoreBox'>
                    <h3>certifications</h3>
                    <p>Resume: {certifications.resume ? tickIcon : xIcon} </p>
                    <p>LinkedIn: {certifications.linkedin ? tickIcon : xIcon}</p>
                    <p>Mock Interview: {certifications.mockInterview ? tickIcon : xIcon}</p>
                    <p>GitHub: {certifications.github ? tickIcon : xIcon}</p>
                </div>
            </div>
            <Notes

            />
        </>
        return (
            <div className="StudentProfile" key={id}>
                <img src={profilePhoto} alt="" />
                <div className='StudentStatus'>{studentStatus()}</div>
                <div className="Student">
                    <h4>{names.preferredName} {names.middleName.charAt(0)}. {names.surname}</h4>
                    <p>{username}</p>
                    <p><span>Birthday:</span> {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dob))}</p>

                    <div >
                        <button type="button" className="link-button" key={id} data-id={id} onClick={() => { setShowMore(!showMore); handleCheck() }}>

                            {showMore ? 'Show Less...' : 'Show More... '}</button>
                    </div>
                </div>
                {showMore && extraContent}
                

            </div>
        );
    })


    return (
        <div className="Students">
            <div className="TitleWidget" >
                <h2>{props.currentTitle}</h2>
                <div>Total Students: <span>{Data.length}</span></div>
            </div>
            {students}
        </div>
    )
}

export default Student