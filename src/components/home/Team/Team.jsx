import React from 'react';
import teamData from './TeamInfo.json';

const TeamPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Our Team</h1>
      <div className="row">
        {teamData.map((member, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
