import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
  } from "react-native-appwrite";
  
export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1', // hosted version
    platform: 'com.app.Calpro',
    projectId: '6713c7ce0007f1ca23f9',
    databaseId: '6713c9d400174e94ca4d',
    userCollectionId: '6713ca28000d498f144e',
    storageId: '6713ccf400340139252b'
};

// init react-native SDK
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
  .setProject("6713c7ce0007f1ca23f9");

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(), // Ensure this is correct
        email,
        password,
        username
      );
  
      if (!newAccount) throw new Error("Account creation failed");
  
      // Use the generated account ID
      const newUserId = newAccount.$id; // Correct way to access the user ID
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password); // Ensure this step is valid
  
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        newUserId, // Use the correct new user ID
        {
          accountId: newUserId,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
    } catch (error) {
      console.error("User creation error:", error);
      throw new Error(error.message);
    }
  }
  
// Sign In
export async function signIn(email, password) {
    try {
      const session = await account.createSession(email, password); // Adjusted method name
      return session;
    } catch (error) {
      throw new Error(error);
    }
  }

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}
