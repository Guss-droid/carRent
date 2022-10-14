import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
  file: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ file, id }: IRequest) {
    const user = await this.usersRepository.findById(id);

    if (user.avatar) {
      await deleteFile(`./tmp/images/${user.avatar}`);
    }

    user.avatar = file;

    await this.usersRepository.create(user);
  }
}