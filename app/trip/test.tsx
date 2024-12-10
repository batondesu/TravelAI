interface TimeLine {
    hours: string
    activity: string
  }
  
  interface Day {
    title: string
    morning: TimeLine[]
    afternoon: TimeLine[]
    evening: TimeLine[]
  }

function parseTextToItinerary(text: string): Day[] {
    const days = text.split("**").map(day => day.trim()).filter(day => day.length > 0);
    const itinerary: Day[] = [];

    for (const day of days) {
        const lines = day.split("\n").map(line => line.trim()).filter(line => line.length > 0);

        if (lines.length > 0) {
            const title = lines[0];
            const morning: TimeLine[] = [];
            const afternoon: TimeLine[] = [];
            const evening: TimeLine[] = [];

            for (const line of lines.slice(1)) {
                const separatorIndex = line.indexOf(":");
                if (separatorIndex !== -1) {
                    const time = line.slice(0, separatorIndex).trim();
                    const activity = line.slice(separatorIndex + 1).trim();

                    if (time.includes("AM") || time.toLowerCase().includes("morning")) {
                        morning.push({ hours: time, activity });
                    } else if (time.includes("PM") && !time.startsWith("5") && !time.startsWith("7")) {
                        afternoon.push({ hours: time, activity });
                    } else {
                        evening.push({ hours: time, activity });
                    }
                }
            }

            itinerary.push({ title, morning, afternoon, evening });
        }
    }

    return itinerary;
}

// Example usage:
const text = `**Friday**\nMorning: Start your day with breakfast at a classic New York diner, like Sarabeth's or Ellen's Stardust Diner.\n10:00 AM: Head to the 9/11 Memorial & Museum.\n12:00 PM: Grab lunch at a food cart or a deli, like Katz's Delicatessen or Carnegie Deli.\n1:30 PM: Visit the Statue of Liberty and Ellis Island. You can take a ferry to Liberty Island to see the iconic statue up close and learn about its history at the nearby Ellis Island Immigration Museum.\n5:00 PM: Take a stroll across the Brooklyn Bridge for spectacular views of the Manhattan skyline and the East River.\n7:00 PM: Enjoy dinner at a trendy spot in Williamsburg, Brooklyn, like L & B Spumoni Gardens or Peter Luger Steak House.\n\n**Saturday**\n9:00 AM: Start your day with a visit to Central Park. Take a leisurely walk through the park, visit the Central Park Zoo, or rent a bike and ride through the scenic paths.\n12:00 PM: Grab lunch at a classic New York eatery, like Joe's Pizza or Lombardi's Pizza.\n1:30 PM: Visit the Metropolitan Museum of Art (The Met). With over 2 million works of art, it's one of the world's largest and most famous museums.\n4:00 PM: Explore the famous Times Square, where you can see the bright lights, giant billboards, and street performers.\n7:00 PM: Enjoy dinner at a classic New York restaurant, like Carbone or Peter Luger Steak House.\n\n**Sunday**\n9:00 AM: Visit the High Line, a former elevated rail line turned into a public park with great views of the Hudson River.\n11:00 AM: Stop by the iconic Chelsea Market, a popular food hall and shopping destination.\n12:30 PM: Grab lunch at a trendy spot in the Meatpacking District, like The Spotted Pig or L'Artusi.\n2:00 PM: Visit the Museum of Modern Art (MoMA), which features an impressive collection of modern and contemporary art.\n5:00 PM: End your weekend with a visit to the Top of the Rock Observation Deck, where you can enjoy stunning views of the city from the 70th floor of the Rockefeller Center.`;

const itinerary = parseTextToItinerary(text);
console.log(itinerary);
