import React from "react";
import "./App.scss";
import DesiredCompensation from "./components/DesiredCompensation/index";
import Education from "./components/Education";
import Expirience from "./components/Expirience";
import Hobbies from "./components/Hobbies";
import MainInfo from "./components/MainInfo";

const App = () => {
    const personalData = {
        fullName: "Bazhenov Maksim",
        birthYear: 2004,
        desiredPosition: "Front-end developer",
        university: "It-Acadenmy",
        graduationYear: 2021,
        lastWorkPlace: "Сar mechanic",
        lastWorkYears: "2020-2021",
        skills: ["HTML", "CSS", "JS", "React"],
        hobbies: ["Watch TV", "Play Games", "Read about space", "Read about psychology"],
        desiredCompensation: 40000
    };

    function getJobExp(data) {
        const years = data.split("-");
        return Number(years[1]) - Number(years[0]);
    }

    function compensationInHour(compensation){
        return Math.round((compensation / 20 / 8) * 10) / 10
    }

    const data = (
        <div className="App">
            <MainInfo
                fullName={personalData.fullName}
                age={new Date().getFullYear() - personalData.birthYear}
                desiredPosition={personalData.desiredPosition}
            />
            <Education
                university={personalData.university}
                graduationYear={personalData.graduationYear}
            />
            <Expirience
                lastWorkPlace={personalData.lastWorkPlace}
                expirience={getJobExp(personalData.lastWorkYears)}
                skills={personalData.skills}
            />
            <Hobbies hobbies={personalData.hobbies} />
            <DesiredCompensation
                compensation={personalData.desiredCompensation}
                compensationInHour={compensationInHour(personalData.desiredCompensation)}
            />
        </div>
    );

    return data;
};

export default App;