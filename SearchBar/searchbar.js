// Sample Data
const users = [
    {
        id: 1,
        name: "Meet Patel",
        bio: "Frontend Developer who loves React and modern UI design.",
        image: "https://i.pinimg.com/736x/70/53/e6/7053e6f9a2b64a8c302ef27918e2d39a.jpg",
    },
    {
        id: 2,
        name: "Het Shah",
        bio: "Cybersecurity enthusiast and ethical hacking learner.",
        image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_user_personalization&w=740&q=80",
    },
    {
        id: 3,
        name: "Riya Mehta",
        bio: "UI/UX designer passionate about minimal and clean layouts.",
        image: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXMlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 4,
        name: "Aarav Joshi",
        bio: "Backend developer working with Node.js and MongoDB.",
        image: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
    },
    {
        id: 5,
        name: "Sneha Desai",
        bio: "Machine learning student exploring AI projects.",
        image: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 6,
        name: "Devansh Trivedi",
        bio: "Full Stack Developer building scalable web applications.",
        image: "https://i.pravatar.cc/300?img=11",
    },
    {
        id: 7,
        name: "Kavya Sharma",
        bio: "Digital marketer and branding strategist.",
        image: "https://i.pravatar.cc/300?img=12",
    },
    {
        id: 8,
        name: "Yash Verma",
        bio: "Cloud engineer working with AWS and DevOps tools.",
        image: "https://i.pravatar.cc/300?img=13",
    },
    {
        id: 9,
        name: "Priya Nair",
        bio: "Data analyst who loves turning data into insights.",
        image: "https://i.pravatar.cc/300?img=14",
    },
    {
        id: 10,
        name: "Rahul Kapoor",
        bio: "Mobile app developer specializing in Flutter apps.",
        image: "https://i.pravatar.cc/300?img=15",
    },
    {
        id: 11,
        name: "Anjali Singh",
        bio: "Graphic designer creating modern brand identities.",
        image: "https://i.pravatar.cc/300?img=16",
    },
    {
        id: 12,
        name: "Manav Deshmukh",
        bio: "Cybersecurity researcher and penetration tester.",
        image: "https://i.pravatar.cc/300?img=17",
    },
    {
        id: 13,
        name: "Ishita Patel",
        bio: "AI enthusiast building machine learning projects.",
        image: "https://i.pravatar.cc/300?img=18",
    },
    {
        id: 14,
        name: "Rohan Mehra",
        bio: "Game developer passionate about 3D environments.",
        image: "https://i.pravatar.cc/300?img=19",
    },
    {
        id: 15,
        name: "Simran Kaur",
        bio: "Content writer focusing on tech and startups.",
        image: "https://i.pravatar.cc/300?img=20",
    }
];

const container = document.querySelector(".card-container");
const searchInput = document.querySelector(".bar");

// Function to display cards
function displayCards(data) {
    container.innerHTML = "";

    data.forEach((user) => {
        const card = `
      <div class="card" data-id="${user.id}">
        <img src="${user.image}" alt="image" class="img" />
        <div class="blur"></div>
        <div class="content">
          <h2>${user.name}</h2>
          <p class="card-text">${user.bio}</p>
        </div>
      </div>
    `;
        container.innerHTML += card;
    });
}

// Initial display
displayCards(users);

// Search functionality
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(value) ||
        user.bio.toLowerCase().includes(value)
    );

    displayCards(filtered);
});