import styles from '../styles/Home.module.css'
import React, { useState, useMemo } from 'react';
import Select from "react-select";
import axios from 'axios';

const Home = ({ blogs }) => {
  const options = useMemo(
    () => [
      { value: "apple", label: "Apple", color: "red" },
      { value: "banana", label: "Banana", color: "yellow" },
      { value: "orange", label: "Orange", color: "orange" },
      { value: "berry", label: "Berry", color: "blue" },
    ],
    []
  );
  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        border: "1px dotted black",
        color: state.data.color,
        opacity: 0.8,
        padding: 20,
      }),
      control: (provided) => ({
        ...provided,
        width: 200,
        background: "green",
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
      }),
    }),
    []
  );

  // const [blogName, setBlogName] = useState(null);
  
  // const handleSearch = (e) => {
  //    setBlogName(e.value);
    
  //    fetchBlogName();
  // };

  // const fetchBlogName = async() => {
  //   const response = await axios('http://localhost:3000/text', {
  //     name: blogName 
  //   });
  //   console.log(response.data);
  // };


  return (
    <div className={styles.container}>
      <h1>WELCOME PKK blog</h1>

      {/* <ul>
        {blogs.map((lst) => (
            <li key={lst.id}>
              <span>{lst.name}</span>
            </li>
        ))}
      </ul> */}
      <Select
        options={options}
        defaultValue={options[1]}
        styles={customStyles}
      />
    </div>


  )
}

// Home.getInitialProps = async () => {
//   const response = await axios.get('http://localhost:3000/api')
//   const data = response.data
//   console.log("data : ", data)
//   return {
//     blogs: data
//   }
// }

export default Home