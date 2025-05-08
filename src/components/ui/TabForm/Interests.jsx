import React from 'react'


const allInterests = ["coding", "content creation", "Editing","vloging"]; 

const Interests = ({data,setData,errors}) => {
  const { interests ,theme} = data;


  const handleCheckboxChange = (e) => {
   const {name, checked} = e.target;
   console.log(checked);
  const updatedInterests = checked ? [...interests,name] : interests.filter((i)=> i !== name) 

   setData((prevState)=>({
    ...prevState,
    interests:updatedInterests
   }))
  }
  console.log(interests)
  return (
    <div className={`interests-container ${theme}`}>
      {allInterests.map((interest) => (
        <div key={interest} className="interest-item">
          <label>
            <input
              type="checkbox"
              name={interest}
              checked={interests.includes(interest)}
              onChange={handleCheckboxChange}
              />
            {interest.charAt(0).toUpperCase() + interest.slice(1)}
          </label>
        </div>
      ))}
      {errors.interests && <span className='error'>{errors.interests}</span>}
    </div>
  );
}

export default Interests