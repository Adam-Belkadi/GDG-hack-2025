import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // Django backend URL
const API_DATA_URL = `${API_URL}/api/data`;

// Login function
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/token/`, {
            email,
            password,
        });
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        return response.data;
    } catch (error) {
        throw error.response?.data || 'Login failed';
    }
};

// Register Function
export const register = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register/`, {
            email,
            password,
        });
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        return response.data;
    } catch (error) {
        throw error.response?.data || 'Login failed';
    }
};

// Refresh token function
export const refreshToken = async () => {
    try {
        const refresh = localStorage.getItem('refresh');
        if (!refresh) throw new Error('No refresh token available');

        const response = await axios.post(`${API_URL}/auth/token/refresh/`, {
            refresh,
        });
        localStorage.setItem('access', response.data.access);
        return response.data.access;
    } catch (error) {
        logout();
        throw error;
    }
};

// Function to send authenticated request
export const fetchProtectedData = async () => {
    try {
        let access = localStorage.getItem('access');
        if (!access) access = await refreshToken(); // Refresh token if needed

        const response = await axios.get(`${API_URL}/protected/`, {
            headers: { Authorization: `Bearer ${access}` },
        });

        return response.data;
    } catch (error) {
        throw error.response?.data || 'Failed to fetch protected data';
    }
};

// Logout function
export const logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
};

const getAuthHeaders = () => {
    const token = localStorage.getItem('access');
    return {
        headers: { Authorization: `Bearer ${token}` },
    };
};

// =========================
// Community API Functions
// =========================

export const getCommunities = async () =>
    axios.get(`${API_DATA_URL}/private/communities/`, getAuthHeaders());

export const deleteCommunity = async (communityId) =>
    axios.delete(
        `${API_DATA_URL}/private/communities/${communityId}/delete/`,
        getAuthHeaders()
    );

export const getCommunityEvents = async (communityId) =>
    axios.get(
        `${API_DATA_URL}/private/communities/${communityId}/events/`,
        getAuthHeaders()
    );

export const starEvent = async (communityId, eventId) =>
    axios.post(
        `${API_DATA_URL}/private/communities/${communityId}/events/${eventId}/star/`,
        {},
        getAuthHeaders()
    );

export const filterCommunityEvents = async (communityId) =>
    axios.get(
        `${API_DATA_URL}/private/communities/${communityId}/events/filter/`,
        getAuthHeaders()
    );

export const getOrderedCommunityMembers = async (communityId) =>
    axios.get(
        `${API_DATA_URL}/private/communities/${communityId}/members/ordered/`,
        getAuthHeaders()
    );

export const deleteCommunityPost = async (communityId, postId) =>
    axios.delete(
        `${API_DATA_URL}/private/communities/${communityId}/posts/${postId}/delete/`,
        getAuthHeaders()
    );

export const starCommunityPost = async (communityId, postId) =>
    axios.post(
        `${API_DATA_URL}/private/communities/${communityId}/posts/${postId}/star/`,
        {},
        getAuthHeaders()
    );

export const getCommunityPostTags = async (communityId, postId) =>
    axios.get(
        `${API_DATA_URL}/private/communities/${communityId}/posts/${postId}/tags/`,
        getAuthHeaders()
    );

export const createCommunityPost = async (communityId, postData) =>
    axios.post(
        `${API_DATA_URL}/private/communities/${communityId}/posts/create/`,
        postData,
        getAuthHeaders()
    );

export const createCommunity = async (communityData) =>
    axios.post(
        `${API_DATA_URL}/private/communities/create/`,
        communityData,
        getAuthHeaders()
    );

export const getEnrolledCommunities = async () =>
    axios.get(
        `${API_DATA_URL}/private/communities/enrolled/`,
        getAuthHeaders()
    );

export const searchCommunities = async () =>
    axios.get(`${API_DATA_URL}/private/communities/search/`, getAuthHeaders());

export const getCommunityDetails = async (communityId) =>
    axios.get(
        `${API_DATA_URL}/private/community/${communityId}/`,
        getAuthHeaders()
    );

export const getCommunityPosts = async (communityId) =>
    axios.get(
        `${API_DATA_URL}/private/community/${communityId}/posts/`,
        getAuthHeaders()
    );

export const getCommunityTags = async (communityId) =>
    axios.get(
        `${API_DATA_URL}/private/community/${communityId}/tags/`,
        getAuthHeaders()
    );

export const enrollInCommunity = async (communityId) =>
    axios.post(
        `${API_DATA_URL}/private/community/enroll/${communityId}/`,
        {},
        getAuthHeaders()
    );

// =========================
// Event API Functions
// =========================

export const createEvent = async (eventData) =>
    axios.post(
        `${API_DATA_URL}/private/events/create/`,
        eventData,
        getAuthHeaders()
    );

// =========================
// Tags API Functions
// =========================

export const getTags = async () =>
    axios.get(`${API_DATA_URL}/private/tags/`, getAuthHeaders());

// =========================
// Global Events API Functions
// =========================

export const createGlobalEvent = async (eventData) =>
    axios.post(
        `${API_DATA_URL}/public/global-event/create/`,
        eventData,
        getAuthHeaders()
    );

// =========================
// Notifications API Functions
// =========================

export const getNotifications = async () =>
    axios.get(`${API_DATA_URL}/public/notifications/`, getAuthHeaders());
