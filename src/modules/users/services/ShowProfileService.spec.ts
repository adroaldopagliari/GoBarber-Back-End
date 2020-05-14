import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'apadawan',
      email: 'adroaldo1@gmail.com',
      password: '123',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('apadawan');
    expect(profile.email).toBe('adroaldo1@gmail.com');
  });

  it('should not be able to show the profile from non-existent user', async () => {
    await expect(
      showProfile.execute({
        user_id: 'non-existent-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
