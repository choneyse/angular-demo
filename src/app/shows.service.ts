import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  shows = [
    {
      title: 'Beyond the Rainbow',
      titleSecond: 'The Judy Garland Musical',
      description:
        "Adored by millions, Judy Garland wowed us from the time she was a teenager in pigtails singing &quot;Over the Rainbow,&quot; to her legendary 1961 come-back Carnegie Hall concert in what The New York Times called &quot;the concert of the century.&quot; Set both on the stage of Carnegie Hall and in Garland 's mind, <b> <i> Beyond the Rainbow </i></b> simultaneously treats its audience to the famed concert while telling the life story of one of Hollywood's most unforgettable legends.",
      startDate: '2018-9-28',
      endDate: '2018-10-14',
      poster: 'assets/BeyondTheRainbow_POSTER.jpg',
      logo: 'assets/BeyondTheRainbow_ShowLogo.png',
      url: '/beyond-the-rainbow'
    },
    {
      title: "A Doll's House, Part 2",
      titleSecond: '',
      description:
        'In the final scene of Henrik Ibsen’s groundbreaking masterwork of 1879, A Doll’s House, wife and mother Nora Helmer makes the shocking decision to leave her husband and children, and begin a life on her own.  This climactic event – when Nora slams the door on everything in her life – instantly propelled world drama into the modern age.',
      startDate: '2018-11-2',
      endDate: '2018-11-18',
      poster: 'assets/ADollsHouse_POSTER.jpg',
      logo: 'assets/ADollsHouse-Part2_Logo.png',
      url: '/a-dolls-house-part-2'
    },
    {
      title: 'Marvelous Wonderettes:',
      titleSecond: 'Dream On',
      description:
        'It’s 1969 and The Marvelous Wonderettes are back to throw a retirement party for their favorite teacher, set to the greatest girl-group hits of the 60’s (“Gimme Some Lovin”, “It’s Your Thing”).  Act Two finds the girls back together as the class of 1958 celebrates their 20-year reunion. Classic pop and rock hits of the 70’s (“We are Family”, “I Will Survive”) provide the perfect soundtrack for these old friends to catch up on the places life has led them, all performed with their own marvelous spin!',
      startDate: '2018-12-7',
      endDate: '2019-1-6',
      poster: 'assets/Wonderettes_POSTER.jpg',
      logo: 'assets/Wonderettes-DreamOn_Logo.png',
      url: 'marvelous-wonderettes-dream-on'
    }
  ];
  getAllShows() {
    return this.shows;
  }

  getShow(index: number) {
    return this.shows[index];
  }
}
