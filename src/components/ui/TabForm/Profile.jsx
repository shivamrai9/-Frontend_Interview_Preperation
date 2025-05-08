

const Profile = ({data,setData,errors}) => {
  const {name,email,age} = data;

  const handleDataChange = (e) => {
    setData(prevState => ({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  return (
    <div className={`tab_content_body  ${data.theme}`}>
      <label htmlFor="name">Name : </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleDataChange}
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <label htmlFor="email">Email : </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleDataChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}
      <label htmlFor="age">Age : </label>
      <input
        type="number"
        value={age}
        name="age"
        id="age"
        onChange={handleDataChange}
      />
      {errors.age && <span className="error">{errors.age}</span>}
    </div>
  );
}

export default Profile