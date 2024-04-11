import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loading from "../Loading";
import ProfileCard2 from "./ProfileCard2";

import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase";

const ProfileCard = (prop) => {
  const { userData, } = prop;
  const [val, setVal] = useState([])
  const [loading, setLoading] = useState(true)
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
    if(values.userName === userData.displayName)
    {
      return <ProfileCard2 values={values} key={index}/>
    }
  })

  return (
    <>
      {
        loading ? <Loading /> : card
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
    userName: state.userProfile.userName,
  };
};

export default connect(mapStateToProps, null)(ProfileCard);
