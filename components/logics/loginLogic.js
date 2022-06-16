import { auth } from './firebase';
import {
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider
} from 'firebase/auth';

function GoogleAuthentication(){
    signInWithPopup(auth, new GoogleAuthProvider());
}

function FacebookAuthentication(){
    signInWithPopup(auth, new FacebookAuthProvider());
}

function GithubAuthentication(){
    signInWithPopup(auth, new GithubAuthProvider());
}

export {
    GoogleAuthentication,
    FacebookAuthentication,
    GithubAuthentication
};