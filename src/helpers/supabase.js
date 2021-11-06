import { supabase } from "../lib/supabaseClient";

export const getGuestData = async () => {
  try {
    let { data, error, status } = await supabase
      .from("guestbook")
      .select(`name,message`)
      .order("created_at", { ascending: false });

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error) {
    alert(error.message);
  } finally {
  }
};

export const sendMessage = async ({ name, message }) => {
  try {
    const addGuest = {
      name,
      message,
      created_at: new Date(),
    };

    let { error } = await supabase.from("guestbook").insert(addGuest, {
      returning: "minimal", // Don't return the value after inserting
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  } finally {
  }
};

export const addRSVP = async ({ name, email, attending }) => {
  try {
    setLoading(true);

    const addGuest = {
      name,
      email,
      attending,
      created_at: new Date(),
    };

    let { error } = await supabase.from("rsvp").insert(addGuest, {
      returning: "minimal", // Don't return the value after inserting
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
};
