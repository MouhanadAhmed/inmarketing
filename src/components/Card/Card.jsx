import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import PropTypes from 'prop-types';
  import { useNavigate } from 'react-router-dom';


  SimpleCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
  };
  export function SimpleCard({ title, icon, desc, desc1}) {

    const navigate  = useNavigate();

    const handleCardClick = (additionalProps) => {
      // Navigate to the desired component (replace '/other-component' with your actual route)
      navigate('/servicePage', { state: additionalProps });
    };
    return (
      <Card className="mt-6 w-full mx-3 md:mx-0  2xl:mx-0 text-white p-4 bg-custom-gold border-2  rounded-lg hover:border-custom-gold border-custom-gold  hover:bg-white hover:text-custom-gold delay-100" onClick={() => handleCardClick({ title:title, icon, desc })}>
        <CardBody className="flex items-center">
            <p className="mb-2 w-1/5 h-max pt-2">

        <i className={`${icon} fa-solid  fa-xl mb-2 leading-none fa-fade`}></i> 
            </p>
          <Typography variant="h5" color="blue-gray" className=" w-3/5  text-xl">
            {title}
          </Typography>
          {/* <Typography className="text-sm p-3">
            {desc1}
          </Typography> */}
          <Typography className="text-sm p-3 w-1/5">
            {/* ..Read more */}
            <i className={`fa-arrow-right fa-solid  fa-2xl mb-2 leading-none fa-fade`}></i> 
          </Typography>
        </CardBody>
        {/* <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter> */}
      </Card>
    );
  }