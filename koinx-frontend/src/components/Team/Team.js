import React from 'react';
import "./team.css";
const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    designation: "Designation here",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzIzE3pSQN9f_LXCVBrHlOriZOJy9h2-ymA&s", // Replace with actual image path
   
  },
  {
    id: 2,
    name: "Elina Williams",
    designation: "Designation here",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9qcvoNjBZgL2Ho0Y7cFY3FHfiFbHJ9asgtbdbomBlP6UOpAeKrAFg6f16K5l5CJjsNA&usqp=CAU", // Replace with actual image path
    
  },
  {
    id: 3,
    name: "John Smith",
    designation: "Designation here",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcCL4MCJoDpCOpxB8lvNjr9gq7G704HIwqd5pP-vz4tiiav_dYKAfL75ChZfH6DGnI8w&usqp=CAU", // Replace with actual image path
    
  },
];

const Team = () => {
  return (
    <div className="team">
      <h2 className="team-heading">Team</h2>
      <p className="team-description">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mauris integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.profileImg} alt={member.name} className="team-profile-img" />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-designation">{member.designation}</p>
              <p className="team-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
