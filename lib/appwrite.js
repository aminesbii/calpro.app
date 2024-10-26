import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";


export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1', // hosted version
    platform: 'com.app.Calpro',
    projectId: '6713c7ce0007f1ca23f9',
    databaseId: '6713c9d400174e94ca4d',
    userCollectionId: '6713ca28000d498f144e',
    storageId: '6713ccf400340139252b'
};

// init react-native SDK
const clientInstance = new Client(); // renamed from Client to clientInstance

clientInstance
    .setEndpoint(appwriteConfig.endpoint) // my appwrite endpoint
    .setProject(appwriteConfig.projectId) // project id
    .setPlatform(appwriteConfig.platform) // bundle or app id

const account = new Account(clientInstance);
const avatars = new Avatars(clientInstance);
const databases = new Databases(clientInstance);
export const createUser = async (email, password, username) => {
    try {
        // Remove the custom ID, let Appwrite handle ID generation
        const newAccount = await account.create(
            email,  // email
            password,  // password
            username  // username
        );

        if (!newAccount) throw new Error("Account creation failed");

        // Generate avatar URL based on initials
        const avatarUrl = avatars.getInitials(username);

        // Sign the user in after successful creation
        await signIn(email, password);

        // Create a document in the database with user details (let Appwrite generate the document ID)
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            {}, // You can pass an empty object for Appwrite to generate ID automatically
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl    
            }
        );

        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error(error.message);
    }
};


export async function signIn(userId, email, password) {
    try {
        const session = await account.createSession(userId ,email, password); // Use the updated method here
        return session;
    } catch (error) {
        throw new Error(error.message); // Handle the error
    }
}
