
// const Avatar = ({name, description}) => {
//     return (
//       <div>
//       <h2>Avatar component</h2>
//       <img src={description}  alt="img" />
//       <p>{name}</p>
//   </div>
//     )
//   }
  
//   export default Avatar

import { ReactNode } from "react";

interface Iprops {
  render:(name: string, description: string) => ReactNode
}
const Avatar = ({render}: Iprops) => render;

export default Avatar