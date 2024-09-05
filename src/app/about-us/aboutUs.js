import ecomAboutUs  from '../../images/ecomAboutUs.jpg'
const AboutUs = () => {
  return (
<section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            Learn more about our company, values, and mission.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={ecomAboutUs}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-6">
              We are a dedicated team of professionals passionate about making a
              positive impact in the world through our products and services.
              Our journey began in 2010, and since then, we've been committed to
              delivering exceptional experiences to our clients.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Our mission is to help businesses grow and succeed by providing
              innovative and reliable solutions. We believe in fostering
              long-lasting partnerships and building a better future through
              technology, creativity, and collaboration.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-2">Integrity and transparency in everything we do</li>
              <li className="mb-2">Commitment to customer satisfaction</li>
              <li className="mb-2">Innovation and creativity</li>
              <li className="mb-2">Fostering a collaborative and inclusive environment</li>
              <li className="mb-2">Delivering excellence through passion and dedication</li>
            </ul>
          </div>
        </div>
      </div>
</section>
  );

}

export default AboutUs
