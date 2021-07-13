export default {
    'username':[{ required: true, message: '请输入用户名', trigger: 'blur' },{pattern:/^[a-zA-z]\w{3,15}$/,message:'用户名: 字母、数字、下划线组成，字母开头，4-16位', trigger: 'blur'}],
    'password':[{ required: true, message: '请输入密码', trigger: 'blur' },{pattern:/^[a-zA-Z0-9]{6,22}$/,message:'密码: 6-22 位字母数字', trigger: 'blur'}],
    'email':[{ required: true, message: '请输入邮箱', trigger: 'blur' },{type:"email",message: '请输入正确的邮箱', trigger: 'blur'}],
}