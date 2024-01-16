const { Post } = require("../models");

// Sample data for seeding posts
const postData = [
    {
        title: "The Rise of Artificial Intelligence: Transforming Industries",
        content: "Artificial Intelligence (AI) has emerged as a transformative force across various industries, reshaping the way we approach complex challenges. In healthcare, AI is revolutionizing diagnostics and treatment plans, leading to more personalized and efficient patient care. The financial sector benefits from AI's predictive analytics, enhancing fraud detection and risk management. In manufacturing, automation driven by AI improves efficiency and precision. However, the rise of AI comes with ethical considerations, such as privacy concerns and biases in algorithms. As we navigate this technological frontier, the future promises even greater advancements in AI, shaping a world where machines and humans collaborate seamlessly.",
        user_id: 1,
    },
    {
        title: "The Future of 5G Technology: Unleashing Connectivity",
        content: "The advent of 5G technology marks a pivotal moment in the evolution of connectivity. With its promise of faster speeds, low latency, and increased device connectivity, 5G is set to revolutionize the way we communicate and interact with the digital world. Smart cities stand to benefit from enhanced infrastructure, enabling efficient public services. Internet of Things (IoT) devices will flourish with seamless connectivity, influencing how we interact with our surroundings. While the benefits are promising, challenges such as infrastructure deployment and security concerns need addressing to ensure a smooth transition to a 5G-enabled future.",
        user_id: 2,
    },
    {
        title: "Blockchain Beyond Cryptocurrency: Decentralizing the Future",
        content: "Blockchain technology, initially associated with cryptocurrencies, has found applications far beyond digital currencies. Its decentralized and secure nature makes it ideal for transforming various industries. In supply chain management, blockchain ensures transparency and traceability. Healthcare benefits from secure and interoperable patient data sharing. Financial services explore blockchain for faster and more secure transactions. Despite these advantages, challenges like scalability and regulatory frameworks need addressing for widespread blockchain adoption. As we look ahead, blockchain holds the potential to reshape industries by providing trust and transparency in a decentralized manner.",
        user_id: 3,
    },
    {
        title: "The Green Tech Revolution: Sustainable Innovations",
        content: "In the face of environmental challenges, the role of technology in fostering sustainability has gained prominence. Green technology, encompassing renewable energy, transportation, and waste management, offers innovative solutions to mitigate the impact of human activities on the planet. Solar and wind energy technologies continue to advance, providing cleaner alternatives to traditional power sources. Sustainable transportation options, including electric vehicles and efficient public transit, contribute to reducing carbon footprints. Embracing green tech is not just an environmental responsibility but also a strategic move towards creating a more sustainable and eco-friendly future for generations to come. Individuals and businesses alike are urged to adopt and support these innovations for a greener tomorrow.",
        user_id: 4,
    }
];

// Function to seed posts into the database
const seedPosts = async () => {
    try {
        // Using Sequelize's bulkCreate to insert multiple posts at once
        await Post.bulkCreate(postData);
        console.log('Posts seeded successfully');
    } catch (error) {
        // Handling errors that may occur during the seeding process
        console.error('Error seeding posts:', error);
    }
};

module.exports = seedPosts;