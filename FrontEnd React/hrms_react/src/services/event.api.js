import { EventUrl } from '../urls/Event.url'
import HttpClientService from './http-client.service'

export class EventApiService {
  static async addEvent(eventData) {
    try {
      await HttpClientService.post(EventUrl.addEventUrl, eventData)
      console.log('Event added successfully')
      // Optionally, you can return the response data or perform any other action upon successful creation
    } catch (error) {
      console.error('Failed to add event:', error)
      throw error
    }
  }

  static async getAllEvents() {
    try {
      const eventsWithImages = await HttpClientService.get(EventUrl.listEventUrl)
      return eventsWithImages
    } catch (error) {
      console.error('Error fetching events:', error)
      throw error
    }
  }
  static async deleteEvent(eventId) {
    try {
      await HttpClientService.delete(EventUrl.deleteEventUrl);
      console.log(`Event with ID ${eventId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting event with ID ${eventId}:`, error);
      throw error;
    }
  }
}
