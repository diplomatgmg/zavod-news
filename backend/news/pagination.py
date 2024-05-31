from rest_framework import pagination
from rest_framework.request import Request


class NewsPagination(pagination.PageNumberPagination):
    page_size = 12

    def get_page_size(self, request: Request):
        current_page = request.query_params.get("page", 1)

        if current_page in (1, "1"):
            return self.page_size

        limit = request.query_params.get("limit", self.page_size)
        return limit
