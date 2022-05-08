import { useEffect, useState } from "react";

export default function Advice() {
  const [randomAdvice, setRandomAdvice] = useState({
      advice: "When painting a room, preparation is key. The actual painting should account for about 40% of the work."
    });

  
    

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(data => setRandomAdvice(data.slip))
  }, [])


  return (
    <div>
      <h1>{randomAdvice.advice}</h1>
    </div>
  )

}



// .then(
//   (result) => {
//     setIsLoaded(true);
//     setRandomAdvice(result.slip.advice);
//   },
//   (error) => {
//     setIsLoaded(true);
//     setError(error);
//   }
// );
// }, []);

// if (error) {
// return <div>Error: {error.message}</div>;
// }else if (isLoaded){
// return <div>Loading...</div>
// }else{
// return (
// <p key={slice.id}>{slice.advice}</p>
// )
// }