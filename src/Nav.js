import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav(){
    const [show, handleShow] = useState(false);

    useEffect(() => {
                window.addEventListener("scroll", () => {
                    if(window.scrollY > 100) {
                        handleShow(true);
                    }
                    else handleShow(false);
                });
                return () => {
                        window.removeEventListener("scroll");
                };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
                <img
                    className='nav__logo'
                    src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                    alt="Netflix Logo"
                
                />

                <img
                    className='nav__avatar'
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAADNCAMAAABXRsaXAAAAaVBMVEUAAAD////6+vrw8PAfHx8cHBz19fXn5+czMzNSUlLz8/MRERE2NjYiIiJsbGzGxsZ1dXW/v7/W1tZ/f3/Jyck1NTWurq5zc3NoaGgtLS21tbVfX1/j4+M9PT3BwcFaWlpOTk6Hh4eVlZXOBACRAAAD7UlEQVR4nO2d63aqMBBGC2i4KCJgsfTUS33/h+zpsoYkBPWHZNaab/YTfHvVJiGZTN4iRN6oA5Ag1gZFwoPiWeuk2/erNy6s+n2XPLSuc+qcM5DXd62rjDrgTPTHSWu1oQ43Ix/Kb50uqZPNyjL1WTfUsWanGVun1JkCkLrWakEdKQBL5VhzHsgGPmzrijpPII6WNdd52iUzrWvqNMGoDWuOy1A/+WCdUGcJSKKtO+ooAem09ZY6SkD22hplBP+l19Z8NhEes7pZK+okQSn+rJGG8Osgjve3VtD/19GaOkpA3rV1Sx0lIK22/qSOEpBPbY00nBXDN9c/6izBOBlfmjvqMMGozL2UA3WaQBysHST+m+FXGnuPFGPyap2d4RjhN76OHeuooI4UAH2QPZxzpexX41/R2DpSvH/kB6Nawzq1/6ZONiPfcTRhHTVcN8bzxvJ061KaPXXAGdg0jqWn8qq65Fm54EGZ5ZfjWHGyyi7mwJSc1BbiINY4iDUOYo2DWOMg1jiINQ5ijYNY4yDWOIg1DmKNg1jjINY4iDUOYo2DWOMg1jiINQ4T1tQlUy/jWeukbvOSuhrwZZR5W6cPrXcn6pwzcKruWu+4Fkuvd9PWnDsNbCesU96tkPydvr4Qb0BAdvqK36kjBSBzbzZxvAIwZmNbo1xP3VnWXOdpl7VpfaROEwyz0xfkrXOkNjFDpy/MbhKc198uW22NsEK5kWlr9itwA9BOX7fuT0hDuHT6ok4SEMxOXxn4fI25NkMaxId1OOY3F+j3NeZeCui+GcjktXd2hmOElcpoPxzz7APgnGvl7fSV8qlQ8FF6zzQj3s0Lp86vI8a1Coc7tQq/3hwXp6edY+mrQfo+9dQ5X0Z/auvHrw3+QV0m9jL8elJbiINY4yDWOIg1DmKNg1jjINY4iDUOYo2DWOMg1jiINQ5ijYNY4yDWOIg1DmKNg1jjINY4TFlTV0y9iKet4+Pl3JdLHpT9+VKP3UcVlRvqasAZ+LhfUdmcqQPOxHn6ndyYc6V0O/EmcsH76sc68Vl/UceaHc8NCIS7mqN37TFvNnEeyAa2tnVDnScQjWXN9ZaLy8G0rqjTBKMyrDle7PFj3DpHaphSaGvMbhIY09aVVlsjrFBuSKcvIKTTFw4F9P91lFFHCUivrTGapVwZOn111FEC0mlrpEHc6PTF8ZEPP7nxpVlThwmG1ekLpeduZu0goXT6quw9Uo6HemOc1xAixbsJ0pWFcqxRO33x3xIfTnNxOn0tJjp9Kc5D2kZFfuv/ExjXeTuzX2Nz61JqjovTvHYsPZ2+um3GZ5thlW27pzt9qYQHyq8ntYU4YFr/ACZxfL6iNSmvAAAAAElFTkSuQmCC"
                    alt="Netflix Logo"
                
                />
        </div>
    )
}

export default Nav