from rest_framework import pagination


class NewsPagination(pagination.LimitOffsetPagination):
    default_limit = 12

    def get_limit(self, request):
        current_page = request.query_params.get("page", 1)

        if current_page in (1, "1"):
            return self.default_limit

        limit = request.query_params.get("limit", self.default_limit)
        return int(limit)
