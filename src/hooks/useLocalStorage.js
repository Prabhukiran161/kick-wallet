import { useCallback } from "react";

export const useLocalStorage = () => {
  const set = useCallback((key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, []);

  const get = useCallback((key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error("Error reading to localStorage", error);
      return null;
    }
  }, []);

  const remove = useCallback((key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage", error);
    }
  }, []);

  return {
    get,
    set,
    remove,
  };
};
