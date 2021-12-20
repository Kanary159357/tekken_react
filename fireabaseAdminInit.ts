import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth, UserRecord } from 'firebase-admin/auth';

const privateKey = process.env[
    'NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY'
].replace(/\\n/g, '\n');
const clientEmail = process.env['NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL'];
const projectId = process.env['NEXT_PUBLIC_FIREBASE_ADMIN_PROJECT_ID'];

if (!privateKey || !clientEmail || !projectId) {
    console.log(
        `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
    );
}
const defaultAppConfig = {
    credential: cert({
        privateKey: privateKey,
        clientEmail,
        projectId,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
};
const firebaseAdmin = initializeApp(defaultAppConfig);
export const AdminAuth = getAuth();
