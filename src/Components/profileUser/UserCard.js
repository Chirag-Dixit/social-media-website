import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase";
import Loading from "../Loading";
import ProfileCard from "./ProfileCard";

const UserCard = (prop) => {
  const { userData, userName } = prop;
  const [loading, setLoading] = useState(true);
  const [val, setVal] = useState([]);
  const userValue = collection(database, "users");

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(userValue);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getData();
  }, []);

  const card = val.map((values, index)=>{
    // console.log(values.userName === userName)
    if(values.userName === userName)
    return <ProfileCard values={values} key={index}/>
  })

  return (
    <>
      {loading ? (
        <Loading />
      ) : card}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
    userName: state.userProfile.userName,
  };
};

export default connect(mapStateToProps, null)(UserCard);
