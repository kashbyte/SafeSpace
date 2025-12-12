# SafeSpace

SafeSpace is a web application designed to provide users with a safe, anonymous space to check in on their mental wellness. The platform allows users to quickly record their emotional state, access relevant resources, and find support contacts, all within a simple and accessible interface.  

---

## Features

### Home Page
- Introduces visitors to SafeSpace and explains its purpose.
- Provides a quick overview of how the platform supports anonymous mental wellness check-ins.
- Includes links to the main features in a clean, simple design for easy navigation.

### Mood Check-In Page
- Allows users to express how they feel using emoji-based options.
- Users can also type in a short text note and submit it by clicking an emoji, which acts as a “post” button.
- After submitting, users can read thier posts.
- The page is designed to be quick, stress-free, and fully anonymous.

### Resources Page
- Offers helpful materials corresponding to the user’s emotional state.
- Examples include breathing guides, calming exercises, mindfulness resources, and other wellness content.
- Organized cleanly to avoid overwhelming users and make it easy to find relevant support.

### Community Page
- Lists important mental health support contacts for users in need.
- Focuses on accessibility and clarity so users can quickly find the help they need.

---

## Database Integration

SafeSpace uses **Neon DB** to store mood check-in data. Each mood entry contains:

- `id` – unique identifier for each mood entry
- `user_id` – optional user reference (for future multi-user support)
- `mood` – the selected emoji or mood text
- `note` – optional text note
- `time` – timestamp of the check-in  

The application currently connects to Neon using the [Neon Local Connect tool](https://neon.com/docs/local/neon-local-connect).

---

## Installation and Setup

> **Important:** Anyone reviewing or running this project **will need their own `.env` file** with a Neon DB connection string. They will also need to install the required packages and tools as described below.

1. **Clone the repository**

```bash
git clone https://github.com/kashbyte/V6.git
cd SafeSpace
