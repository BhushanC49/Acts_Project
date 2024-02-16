import HttpClientService from './http-client.service'

class LeaveTypeApiService {
    async addLeaveType(leaveTypeData) {
      try {
        const response = await HttpClientService.post(`http://localhost:7171/api/leavetypes/add`,leaveTypeData);
        return response.data; // Return the response data
      } catch (error) {
        throw new Error('Failed to addleave type. Please try again.');
      }
    }
    
  }
  
  export default new LeaveTypeApiService()
  