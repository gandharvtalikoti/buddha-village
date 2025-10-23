export function LocationMapSection() {
    return (
      <div className="w-full bg-white">
        <h1>Find us on Google Maps</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.2548651476195!2d77.7904729761085!3d13.519944686848168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1f135fa08b5c7%3A0x4ce0c9c384536d01!2sBUDDHA%20VILLAGE!5e0!3m2!1sen!2sin!4v1761219926127!5m2!1sen!2sin"
          width="100%"
          height="350"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
          className="w-full h-[350px] md:h-[450px] grayscale"
          title="Buddha Village Location"
        />
      </div>
    );
  }
  