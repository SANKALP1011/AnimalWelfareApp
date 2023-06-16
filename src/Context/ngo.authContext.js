export const NGOAuthProvider = ({ children }) => {
  const [ngo, setNgo] = useState(null);

  const ngoSignup = async (ngoData) => {
    setNgo(ngoData);
    try {
      await AsyncStorage.setItem("ngo", JSON.stringify(ngoData));
    } catch (error) {
      console.log(error);
    }
  };

  const ngoLogout = async () => {
    setNgo(null);
    try {
      await AsyncStorage.removeItem("ngo");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNgo = async () => {
    const init = async () => {
      try {
        const retrievedData = await AsyncStorage.getItem("ngo");
        const parsedData = JSON.parse(retrievedData);

        if (parsedData && typeof parsedData === "object") {
          setNgo(parsedData);
        } else {
          console.log("Invalid NGO data or not signed in");
        }
      } catch (error) {
        console.log("Error fetching NGO data:", error);
      }
    };

    const fetchData = async () => {
      await init();
    };

    fetchData();
  };

  useEffect(() => {
    fetchNgo();
  }, [ngo]);

  return (
    <NGOAuthContext.Provider value={{ ngo, ngoSignup, ngoLogout, fetchNgo }}>
      {children}
    </NGOAuthContext.Provider>
  );
};
