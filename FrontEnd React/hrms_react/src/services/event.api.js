import { EventUrl } from './urls/event.url';
import HttpClientService from './http-client.service';

export class EventApiService {
  static async addEvent(eventData) {
    try {
      await HttpClientService.post(EventUrl.addEventUrl, eventData);
      console.log('Event added successfully');
      // Optionally, you can return the response data or perform any other action upon successful creation
    } catch (error) {
      console.error('Failed to add event:', error);
      throw error;
    }
  }
}
