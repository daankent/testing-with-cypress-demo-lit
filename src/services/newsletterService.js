class NewsletterService {
  async subscribe(email) {
    const subscribersWithSameEmail = await this.subscriberExists(email);
    console.log(subscribersWithSameEmail);
    if (subscribersWithSameEmail.length > 0) {
      throw new Error("Je bent al geabboneerd op de nieuwsbrief");
    }
    const response = await fetch(`http://localhost:3000/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Er ging iets mis, probeer opnieuw of neem contact met ons op");
    }
  }

  async getSubscribers() {
    const response = await fetch(`http://localhost:3000/subscribers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return response.json();
    }
  }

  async subscriberExists(email) {
    const response = await fetch(`http://localhost:3000/subscribers?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return response.json();
    }
    return [];
  }
}

export const newsletterService = new NewsletterService();
