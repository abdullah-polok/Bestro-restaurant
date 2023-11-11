
const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className="text-center mx-auto md:w-4/12">
            <p className="text-yellow-600">---{subheading}---</p>
            <p className="text-4xl uppercase border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;