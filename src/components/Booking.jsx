import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "@assets/styles/onlinebooking.scss";
import GoogleMapReact from 'google-map-react';
import { useForm } from "react-hook-form";

const insurance = [
  {
    value: 'Other',
    label: 'Other:',
  },
  {
    value: 'UHC',
    label: 'UHC',
  },
  {
    value: 'UMR',
    label: 'UMR',
  },
  {
    value: 'VNS',
    label: 'VNS',
  },
  {
    value: 'BlueCross BlueShield',
    label: 'BCBS',
  },
  {
    value: 'AARP',
    label: 'AARP',
  },
  {
    value: 'AmeriGroup',
    label: 'AmeriGroup',
  },
  {
    value: '1199',
    label: '1199',
  },
  {
    value: 'Aetna',
    label: 'Aetna',
  },
  {
    value: 'Agewell',
    label: 'Agewell',
  },
  {
    value: 'Aig',
    label: 'Aig',
  },
  {
    value: 'Amidacare',
    label: 'Amidacare',
  },
  {
    value: 'AMTrust',
    label: 'AMTrust',
  },
  {
    value: 'Anthem',
    label: 'Anthem',
  },
  {
    value: 'Archcare',
    label: 'Archcare',
  },
  {
    value: 'Centerlight',
    label: 'Centerlight',
  },
  {
    value: 'Centers',
    label: 'Centers',
  },
  {
    value: 'Cigna',
    label: 'Cigna',
  },
  {
    value: 'Clover',
    label: 'Clover',
  },
  {
    value: 'Elderplan',
    label: 'Elderplan',
  },
  {
    value: 'Emblemhealth',
    label: 'Emblemhealth',
  },
  {
    value: 'Extended',
    label: 'Extended',
  },
  {
    value: 'Fidelis',
    label: 'Fidelis',
  },
  {
    value: 'GEHA',
    label: 'GEHA',
  },
  {
    value: 'Hamaspik',
    label: 'Hamaspik',
  },
  {
    value: 'Humana',
    label: 'Humana',
  },
  {
    value: 'Magnacare',
    label: 'Magnacare',
  },
  {
    value: 'Medicare',
    label: 'Medicare',
  },
  {
    value: 'Norguard',
    label: 'Norguard',
  },
  {
    value: 'Nysif',
    label: 'Nysif',
  },
  {
    value: 'Partners',
    label: 'Partners',
  },
  {
    value: 'Segdwick',
    label: 'Segdwick',
  },
  {
    value: 'Sentry',
    label: 'Sentry',
  },
  {
    value: 'Travelers',
    label: 'Travelers',
  },
  {
    value: 'Wellcare',
    label: 'Wellcare',
  },
];
const offices = [
  {
    value: 'Herald Square 39 W 32ND ST, RM 1200',
    label: 'Herald Square 39 W 32ND ST, RM 1200',
  },
  {
    value: 'Bensonhurst 8622 BAY PKWY, suite 2B, BROOKLYN',
    label: 'Bensonhurst 8622 BAY PKWY, suite 2B, BROOKLYN',
  },
  {
    value: 'UpperEastSide 115 E 61ST ST, LOWER LEVEL SUITE',
    label: 'UpperEastSide 115 E 61ST ST, LOWER LEVEL SUITE',
  },
];
let heraldCoordinates = {
  center: {
    lat:40.748157307384865,
    lng:-73.98730787276237
  },
  zoom: 13,
  key: "123",
  mapId: '123'

};
let bensonhurstCoordinates = {
  center: {
    lat: 40.601625060773614,
    lng: -73.99460618933475
  },
  key: "123",
  mapId: '123'
};
let upperEastSideCoordinates = {
  center: {
    lat: 40.76405347683624,
    lng: -73.96797205006055
  },
  key: "123",
  mapId: '123'
};
const AnyReactComponent = ({ text }) => <div className='map-icon'><p>{text}</p><svg viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    fill="#122f4f" stroke="none">
    <path d="M2425 5114 c-469 -44 -849 -216 -1173 -528 -253 -245 -433 -552 -517
    -886 -46 -184 -58 -302 -53 -517 9 -341 60 -525 253 -907 287 -570 710 -1206
    1250 -1881 221 -276 291 -356 329 -377 78 -44 98 -26 417 373 399 497 773
    1032 1045 1494 143 243 325 614 372 757 65 200 84 313 90 541 3 154 1 222 -13
    310 -62 413 -231 757 -514 1049 -288 298 -648 486 -1061 554 -86 14 -351 25
    -425 18z m321 -920 c408 -84 713 -400 779 -806 19 -117 19 -189 0 -306 -77
    -477 -483 -822 -965 -822 -482 0 -888 345 -965 822 -19 117 -19 189 0 306 66
    405 367 718 776 807 88 19 282 19 375 -1z"/>
  </g>
</svg></div>;

export default function BookingOnline() {
  const [SelectTransaction,setSelectTransaction] = useState('Herald Square 39 W 32ND ST, RM 1200');
  function HandleChange(event) {
      let a = event.target.value;
      setSelectTransaction(a);
      console.log(a);
  }
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

    emailjs.send('123','123', data, '123')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       if (typeof window !== `undefined`) {
        window.location.reload();
      }
    }, (err) => {
       console.log('FAILED...', err);
    });
  }
  console.log(errors);

  if(SelectTransaction=="Herald Square 39 W 32ND ST, RM 1200"){
    return (
        <div className='OnlineBooking'>           
             <form onSubmit={handleSubmit(onSubmit)} method="POST" data-netlify="true" >
              <input type="text" placeholder="Full name" {...register("user_name", {required: true, maxLength: 80})} />
              <input type="text" placeholder="Email" {...register("user_email", {required: true, pattern: /^\S+@\S+$/i})} />
              <input type="tel" placeholder="Code number" {...register("code", {required: true, minLength: 2, maxLength: 4})} />
              <input type="tel" placeholder="Mobile number" {...register("contact", {required: true, minLength: 6, maxLength: 12})} />
              <input type="text" placeholder="Reason for Visit" {...register("reason", {required: true, maxLength: 80})} />
              <select {...register("office", {
                required: true,
                onChange: (e) => {HandleChange(e)}, 
              })}>
                {offices.map((option) => (
                    <option className={"option-decoration"} value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
              <select {...register("insurance", {
                required: true,
              })}>
                 {insurance.map((option) => (
                    <option className={"option-decoration"} value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
              <input type="date" placeholder="Date of Appointment" {...register("date", {required: true})} />
              <input type="submit" />
            </form>
            <div className="google-map-api" style={{ height: '90vh', width: '90%' }}>
              <GoogleMapReact
                passive={false}
                bootstrapURLKeys={{ key: heraldCoordinates.key }}
                version={"beta"}
                center={heraldCoordinates.center}
                zoom={heraldCoordinates.zoom}
                mapId='123'
              >
                <AnyReactComponent
                  lat={40.748157307384865}
                  lng={-73.98730787276237}
                  text="Herald Square"
                />
                <AnyReactComponent
                  lat={40.76405347683624}
                  lng={-73.96797205006055}
                  text="UpperEastSide"
                />
                <AnyReactComponent
                  lat={40.601625060773614}
                  lng={-73.99460618933475}
                  text="Bensonhurst"
                />
              </GoogleMapReact>
            </div>
        </div>
    );
  }
  else if(SelectTransaction=="Bensonhurst 8622 BAY PKWY, suite 2B, BROOKLYN"){
    return (
        <div className='OnlineBooking'>
             <form onSubmit={handleSubmit(onSubmit)} method="POST" data-netlify="true" >
              <input type="text" placeholder="Full name" {...register("user_name", {required: true, maxLength: 80})} />
              <input type="text" placeholder="Email" {...register("user_email", {required: true, pattern: /^\S+@\S+$/i})} />
              <input type="tel" placeholder="Code number" {...register("code", {required: true, minLength: 2, maxLength: 4})} />
              <input type="tel" placeholder="Mobile number" {...register("contact", {required: true, minLength: 6, maxLength: 12})} />
              <input type="text" placeholder="Reason for Visit" {...register("reason", {required: true, maxLength: 80})} />
              <select {...register("office", {
                required: true,
                onChange: (e) => {HandleChange(e)}, 
              })}>
                {offices.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
              <select {...register("insurance", {
                required: true,
              })}>
                 {insurance.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
              <input type="date" placeholder="Date of Appointment" {...register("date", {required: true})} />
              <input type="submit" />
            </form>
            <div className="google-map-api" style={{ height: '90vh', width: '90%' }}>
              <GoogleMapReact
                passive={false}
                bootstrapURLKeys={{ key: bensonhurstCoordinates.key }}
                center={bensonhurstCoordinates.center}
                zoom={bensonhurstCoordinates.zoom}
                mapId={bensonhurstCoordinates.mapId}
              >
                <AnyReactComponent
                  lat={40.748157307384865}
                  lng={-73.98730787276237}
                  text="Herald Square"
                />
                <AnyReactComponent
                  lat={40.76405347683624}
                  lng={-73.96797205006055}
                  text="UpperEastSide"
                />
                <AnyReactComponent
                  lat={40.601625060773614}
                  lng={-73.99460618933475}
                  text="Bensonhurst"
                />
              </GoogleMapReact>
            </div>
        </div>
    );
  }
  else if(SelectTransaction=="UpperEastSide 115 E 61ST ST, LOWER LEVEL SUITE"){
    return (
        <div className='OnlineBooking'>
            <form onSubmit={handleSubmit(onSubmit)} method="POST" data-netlify="true" >
              <input type="text" placeholder="Full name" {...register("user_name", {required: true, maxLength: 80})} />
              <input type="text" placeholder="Email" {...register("user_email", {required: true, pattern: /^\S+@\S+$/i})} />
              <input type="tel" placeholder="Code number" {...register("code", {required: true, minLength: 2, maxLength: 4})} />
              <input type="tel" placeholder="Mobile number" {...register("contact", {required: true, minLength: 6, maxLength: 12})} />
              <input type="text" placeholder="Reason for Visit" {...register("reason", {required: true, maxLength: 80})} />
              <select {...register("office", {
                required: true,
                onChange: (e) => {HandleChange(e)}, 
              })}>
                {offices.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
              <select {...register("insurance", {
                required: true,
              })}>
                 {insurance.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
              <input type="date" placeholder="Date of Appointment" {...register("date", {required: true})} />
              <input type="submit" />
            </form>
            <div className="google-map-api" style={{ height: '90vh', width: '90%' }}>
              <GoogleMapReact
                passive={true}
                bootstrapURLKeys={{ key: upperEastSideCoordinates.key }}
                center={upperEastSideCoordinates.center}
                zoom={upperEastSideCoordinates.zoom}
                mapId={upperEastSideCoordinates.mapId}
              >
                <AnyReactComponent
                  lat={40.748157307384865}
                  lng={-73.98730787276237}
                  text="Herald Square"
                />
                <AnyReactComponent
                  lat={40.76405347683624}
                  lng={-73.96797205006055}
                  text="UpperEastSide"
                />
                <AnyReactComponent
                  lat={40.601625060773614}
                  lng={-73.99460618933475}
                  text="Bensonhurst"
                />
              </GoogleMapReact>
            </div>
        </div>
    );
  }
}
