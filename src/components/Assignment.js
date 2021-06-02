import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllData, registerUser} from "../redux/users/users.actions";
import {USERS_FEATURE_KEY} from "../redux/users/users.reducer";



let Assignment = () => {
    let dispatch = useDispatch();
    let userInfo = useSelector((state) => {
       return state[USERS_FEATURE_KEY].user;
    });


    let ayatAlKursi = userInfo.filter((prayer) => {
        return prayer.prayerType === "Ayat Al Kursi";
    });

    let surahalYaseen = userInfo.filter((prayer) => {
        return prayer.prayerType === "Surah Al Yaseen";
    });

    let surahAlikhlas = userInfo.filter((prayer) => {
        return prayer.prayerType === "Surah Al Ikhlas";
    });

    let totalPrayer = ayatAlKursi.length + surahAlikhlas.length + surahalYaseen.length;

    let [user , setUser] = useState({
       name : '',
        email : '',
        count : 1000,
        prayerType : null,
        duaDescription : ''

    });

    // handleInput
    let handleInput = (e) => {
      setUser({
          ...user,
          [e.target.name] : e.target.value
      })
    };

    // submitUser
    let submitUser = (e) => {
        dispatch(registerUser(user));
        alert(`Thank You ${user.name}`);
        dispatch(getAllData());
    };

    useEffect(() => {
        dispatch(getAllData());
    },[]);
  return(
      <React.Fragment>
              <div className="container mt-5">
                  <div className="row">
                      <div className="col-md-5">
                          <div className="card">
                              <div className="card-header bg-success text-white">
                                  <p className="h3">Prayers</p>
                              </div>
                              <div className="card-body bg-light">
                                  <form onSubmit={submitUser}>
                                      <div className="form-group">
                                          <input
                                              name='name'
                                              value={user.name}
                                              onChange={handleInput}
                                              type="text" className='form-control' placeholder='User Name'/>
                                      </div>
                                      <div className="form-group">
                                          <input
                                              name='email'
                                              value={user.email}
                                              onChange={handleInput}
                                              type="email" className='form-control' placeholder='Email'/>
                                      </div>
                                      <p className="h4 font-weight-bold">Praying (Tilawat)</p>

                                      <div className="form-check">
                                          <input
                                              name='prayerType'
                                              onChange={handleInput}
                                              value='Surah Al Yaseen'
                                              className="form-check-input" type="radio"
                                              id="surahYaseen"/>
                                          <label className="form-check-label font-weight-bold" htmlFor="flexRadioDefault1">
                                              Surah Al Yaseen
                                          </label>
                                      </div>
                                      <div className="form-check">
                                          <input
                                              name='prayerType'
                                              onChange={handleInput}
                                              value='Ayat Al Kursi'
                                              className="form-check-input" type="radio"
                                              id="ayatAlKursi"/>
                                          <label className="form-check-label font-weight-bold" htmlFor="flexRadioDefault1">
                                              Ayat Al Kursi
                                          </label>
                                      </div>
                                      <div className="form-check">
                                          <input
                                              name='prayerType'
                                              onChange={handleInput}
                                              value='Surah Al Ikhlas'
                                              className="form-check-input" type="radio"
                                              id="surahIkhlas"/>
                                          <label className="form-check-label font-weight-bold" htmlFor="flexRadioDefault1">
                                              Surah Al Ikhlas
                                          </label>
                                      </div>

                                      <div className="form-group mt-3">
                                      <textarea
                                          name='duaDescription'
                                          value={user.duaDescription}
                                          onChange={handleInput}
                                          rows="4" className="form-control" placeholder="Dua Description"/>
                                      </div>
                                      <div className='form-group'>
                                          <input type="submit" className='btn btn-sm btn-success' value="Submit"/>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-3">
                          <div className="card">
                              <div className="card-header bg-success text-white">
                                  <p className="h3">Prayer Counter</p>
                              </div>
                              <div className="card-body bg-light">
                                  <ul className="list-group">
                                      <li className="list-group-item font-weight-bold">Surah Al Yaseen : <span className='text-success'>{surahalYaseen.length}</span></li>
                                      <li className="list-group-item font-weight-bold">Ayat Al Kursi : <span className='text-success'>{ayatAlKursi.length}</span></li>
                                      <li className="list-group-item font-weight-bold">Surah Al Ikhlas : <span className='text-success'>{surahAlikhlas.length}</span></li>
                                      <li className="list-group-item font-weight-bold">Total Prayers : <span className='text-success'>{totalPrayer}</span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      </React.Fragment>
  )
};
export default Assignment;