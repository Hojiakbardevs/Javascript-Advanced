
const Avatar = ({name, description}) => {
    return (
      <div>
      <h2>Avatar component</h2>
      <img src={description}  alt="img" />
      <p>{name}</p>
  </div>
    )
  }
  
  export default Avatar