import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateOrganizationDto {
  @MinLength(1, { message: '团队名称至少1个字符' })
  @MaxLength(20, { message: '团队名称最多20个字符' })
  @IsString({ message: '团队名称类型错误（正确类型为：String）' })
  @IsNotEmpty({ message: '团队名称不能为空' })
  name: string;

  @IsString({ message: '团队描述类型错误（正确类型为：String）' })
  @IsOptional()
  description: string;

  @MinLength(4, { message: '团队ID至少4个字符' })
  @MaxLength(20, { message: '团队ID最多20个字符' })
  @IsString({ message: '团队名称类型错误（正确类型为：String）' })
  organizationId: string;

  @IsString({ message: '团队Logo类型错误（正确类型为：String）' })
  @IsOptional()
  logo: string;

  @IsBoolean()
  @IsOptional()
  isPersonal?: boolean;
}
