import React from "react";

const SuccessIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    height="50px"
    width="50px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    fill="#000000"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path style={{ fill: "#D7EBFF" }} d="M256,512C114.837,512,0,397.157,0,256S114.837,0,256,0s256,114.843,256,256S397.163,512,256,512z"></path>{" "}
      <path style={{ fill: "#C4E2FF" }} d="M512,256C512,114.843,397.163,0,256,0v512C397.163,512,512,397.157,512,256z"></path>{" "}
      <path
        style={{ fill: "#88CC2A" }}
        d="M256,478.609c-122.75,0-222.609-99.864-222.609-222.609S133.25,33.391,256,33.391 S478.609,133.256,478.609,256S378.75,478.609,256,478.609z"
      ></path>{" "}
      <path style={{ fill: "#7FB335" }} d="M478.609,256c0-122.744-99.859-222.609-222.609-222.609v445.217 C378.75,478.609,478.609,378.744,478.609,256z"></path>{" "}
      <path
        style={{ fill: "#FFFFFF" }}
        d="M233.739,356.174c-8.544,0-17.087-3.261-23.609-9.783l-68.804-68.804 c-13.044-13.038-13.044-34.179,0-47.218c13.044-13.044,34.174-13.044,47.218,0l45.195,45.19l95.282-95.278 c13.044-13.044,34.174-13.044,47.218,0c13.044,13.038,13.044,34.179,0,47.218L257.348,346.391 C250.827,352.913,242.283,356.174,233.739,356.174z"
      ></path>{" "}
      <path
        style={{ fill: "#EDF0F2" }}
        d="M329.021,180.283L256,253.3v94.192c0.435-0.393,0.928-0.681,1.348-1.101l118.891-118.891 c13.044-13.038,13.044-34.179,0-47.218C363.196,167.239,342.065,167.239,329.021,180.283z"
      ></path>{" "}
    </g>
  </svg>
);

export default SuccessIcon;
